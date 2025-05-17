import {
  onManageActiveEffect,
  prepareActiveEffectCategories,
} from '../helpers/effects.mjs';
import { FU } from '../helpers/config.mjs';

/**
 * Extend the basic ItemSheet with some very simple modifications
 * @extends {ItemSheet}
 */
export class FurryUniverseItemSheet extends ItemSheet {
  /** @override */
  static get defaultOptions() {
    return foundry.utils.mergeObject(super.defaultOptions, {
      classes: ['furry-universe', 'sheet', 'item'],
      width: 620,
      height: 500,
      tabs: [
        {
          navSelector: '.sheet-tabs',
          contentSelector: '.sheet-body',
          initial: 'description',
        },
      ],
    });
  }

  /** @override */
  get template() {
    const path = 'systems/furry-universe/templates/item';
    // Return a single sheet for all item types.
    // return `${path}/item-sheet.hbs`;

    // Alternatively, you could use the following return statement to do a
    // unique item sheet by type, like `weapon-sheet.hbs`.
    return `${path}/item-${this.item.type}-sheet.hbs`;
  }

  /* -------------------------------------------- */

  /** @override */
  async getData() {
    // Retrieve base data structure.
    const context = super.getData();

    // Use a safe clone of the item data for further operations.
    const itemData = this.document.toObject(false);

    // Enrich description info for display
    // Enrichment turns text like `[[/r 1d20]]` into buttons
    context.enrichedDescription = await TextEditor.enrichHTML(
      this.item.system.description,
      {
        // Whether to show secret blocks in the finished html
        secrets: this.document.isOwner,
        // Necessary in v11, can be removed in v12
        async: true,
        // Data to fill in for inline rolls
        rollData: this.item.getRollData(),
        // Relative UUID resolution
        relativeTo: this.item,
      }
    );

    // Add the item's data to context.data for easier access, as well as flags.
    context.system = itemData.system;
    context.flags = itemData.flags;

    // Adding a pointer to CONFIG.FU
    context.config = CONFIG.FU;
    context.FU = FU;
    

    // Prepare active effects for easier access
    context.effects = prepareActiveEffectCategories(this.item.effects);

    return context;
  }

  /* -------------------------------------------- */

  
  /** @override */
  activateListeners(html) {
    super.activateListeners(html);

    // Everything below here is only needed if the sheet is editable
    if (!this.isEditable) return;

    // Active Effect management
    html.on('click', '.effect-control', (ev) =>
      onManageActiveEffect(ev, this.item)
    );
// Obsługa przycisku "Rzuć z wybuchami"
  html.find('.exploding-roll-button').click(async (ev) => {
    ev.preventDefault();

    const formula = this.item.system.damage;
    if (!formula) {
      ui.notifications.warn('No Roll Data');
      return;
    }

    // Dodaj efekt wybuchających kości
    const explodingFormula = formula.replace(/d(\d+)(?![xkhl])/g, "d$1x");
    const damagetype = game.i18n.localize(`FU.Damage`);
    const AP = game.i18n.localize(`FU.AP`);

    try {
      const roll = new Roll(explodingFormula);
      await roll.roll({ async: true });
      roll.toMessage({
        speaker: ChatMessage.getSpeaker({ actor: this.item.actor }),
        flavor: `<strong>${this.item.name}</strong> <br/> ${this.item.system.damage} ${this.item.system.damagetype} ${damagetype} ${this.item.system.ap} ${AP}<br/> ${this.item.system.traits}`
      });
    } catch (error) {
      console.error("Błąd rzutu:", error);
      ui.notifications.error("Błędna formuła rzutu.");
    }
  });

/// {{ Rzut na statystykę}}
  html.find("[data-action='custom-roll']").click(ev => {
    ev.preventDefault();
    this._onCustomRoll(html);
  });
  
}
async _onCustomRoll(html) {
  const actor = this.item.actor;
  if (!actor) return ui.notifications.warn("Przedmiot nie ma przypisanego aktora.");

  const stat = html.find("#stat-select").val(); // np. "str"
  const dice = html.find("#dice-input").val();  // np. "d6"
  const statflavor = game.i18n.localize(`FU.Ability.${stat}.abbr`);
  const damagetype = game.i18n.localize(`FU.Damage`);
    const AP = game.i18n.localize(`FU.AP`);
  
  if (!["str", "dex", "int", "wit", "spi"].includes(stat)) {
    return ui.notifications.error("Nieprawidłowa statystyka.");
  }


  const statValue = getProperty(actor.system, `abilities.${stat}.value`);
  const statmod = getProperty(actor.system, `abilities.${stat}.m.value`);
  if (!statValue) return ui.notifications.error("Nie można pobrać wartości statystyki.");

  const formula = `d${statValue} + ${dice} +${statmod}`;
  const explodingFormula = formula.replace(/d(\d+)(?![xkhl])/g, "d$1x");
  const roll = new Roll(explodingFormula);
  await roll.roll();

  roll.toMessage({
    speaker: ChatMessage.getSpeaker({ actor }),
    flavor:`<strong>${this.item.name}</strong> <br/> ${statflavor}+${this.item.system.damage} ${this.item.system.damagetype} ${damagetype} ${this.item.system.ap} ${AP}<br/> ${this.item.system.traits}`  ,
  });
  }







}
