export const FU = {};
export const SYSTEM = 'projectfu';

/**
 * The set of Ability Scores used within the system.
 * @type {Object}
 */
FU.abilities = {
  str: 'FU.Ability.Str.long',
  dex: 'FU.Ability.Dex.long',
  wit: 'FU.Ability.Wit.long',
  int: 'FU.Ability.Int.long',
  spi: 'FU.Ability.Spi.long',
};

FU.abilitiesabbr = {
  str: 'FU.Ability.Str.abbr',
  dex: 'FU.Ability.Dex.abbr',
  wit: 'FU.Ability.wit.abbr',
  int: 'FU.Ability.Int.abbr',
  spi: 'FU.Ability.Spi.abbr',
};

FU.dmg ={
  stat: 'FU.stat',
  flat: 'FU.flat'
}

FU.choice = {
	4: 'FU.D4',
	6: 'FU.D6',
	8: 'FU.D8',
	10: 'FU.D10',
  12: 'FU.D12',
};


FU.status = {
  shaken: 'FU.Shaken'
};

FU.Rank = {
  novice: 'FU.Novice',
  experienced: 'FU.Experienced',
  veteran: 'FU.Veteran',
  hero: 'FU.Hero',
  legend: 'FU.Legend',
};

FU.attack = {
 fig: "FU.Skill.Fighting",
 sho: "FU.Skill.Shooting",
 ath: "FU.Skill.Atletics"

}

FU.AttackType = {
  melee: "FU.MeleeA",
  ranged: "FU.RangedA",
  magic: "FU.MagicA"
}

FU.advance = {
  Skills: 'FU.Skills',
  Talent: 'FU.Talent',
  Attribute: 'FU.Attribute'
}

FU.Hindrance = {
  Racial: 'FU.Racial',
  Minor: 'FU.MinorHindrance',
  Major: 'FU.MajorHindrance',
  MinorInjury: 'FU.MinorInjury',
  MajorInjury: 'FU.MajorInjury',
  Mental: 'FU.Mental',
}

FU.Talent = {
  Racial: 'FU.Racial',
  Background: 'FU.Background',
  Occupation: 'FU.Occupation',
  Other: 'FU.Other',
  Novice: 'FU.Novice',
  Experienced: 'FU.Experienced',
  Veteran: 'FU.Veteran',
  Hero: 'FU.Hero',
  Legend: 'FU.Legend',
}

FU.AB = {
  Magic: 'FU.Magic',
  Holy: 'FU.Holy',
  Druidic: 'FU.Druidic',
  Shamanic: 'FU.Shamanic',
  Music: 'FU.Music',
  Metamoprhosis: "FU.Metamorphosis",
  Enchant: 'FU.Enchant',
  Psionic: 'FU.Psionic',
  Technomancy: 'FU.Technomancy',
  Cybernetics: 'FU.Cybernetics',
}

FU.Magic = {
  Spellcasting: 'FU.Skill.Spellcasting',
  Faith: 'FU.Skill.Faith',
  Rituals: 'FU.Skill.Rituals',
  Perform: 'FU.Skill.Perform',
  Psionic: 'FU.Skill.Psionic',
  Hacking: 'FU.Skill.Hacking',
}

FU.Range = {
  Melee: 'FU.Melee',
  Reach: 'FU.Reach',
  Minimal: 'FU.6/12/24',
  Short: 'FU.12/24/48',
  Normal: 'FU.24/48/96',
  Long: 'FU.50/100/200',
  Extreme: 'FU.100/200/400',
  Sniper: 'FU.500/1000/2000',
  Inteligence: 'FU.Inteligence',
}

FU.Target = {
  self: 'FU.Self',
  touch: 'FU.Touch',
  creature: 'FU.Creature',
  point: 'FU.Point',
  cone: 'FU.Cone',
  aoe: 'FU.AOE',
}