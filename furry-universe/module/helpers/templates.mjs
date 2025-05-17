/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
  return loadTemplates([
    // Actor partials.
    'systems/furry-universe/templates/actor/parts/actor-bio.hbs',
    'systems/furry-universe/templates/actor/parts/actor-skills.hbs',
    'systems/furry-universe/templates/actor/parts/actor-traits.hbs',
    'systems/furry-universe/templates/actor/parts/actor-equipment.hbs',
    'systems/furry-universe/templates/actor/parts/actor-magic.hbs',
    'systems/furry-universe/templates/actor/parts/actor-settings.hbs',
    // Item partials
    'systems/furry-universe/templates/item/parts/item-effects.hbs',
  ]);
};
