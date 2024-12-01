import Items from 'warframe-items';

/** @module */

/**
 * Map base10 int colors to hex color strings
 * @param {Record<string, number | undefined>} colors color map
 * @returns {Record<string, string>}
 */
export const mapToHex = (colors) => {
  const hex = {};
  Object.entries(colors).forEach(([key, /** @type {undefined | number}  */ value]) => {
    hex[key] = Math.abs(value).toString(16).toUpperCase();
  });
  return hex;
};

const categories = [
  'Skins',
  'Primary',
  'Secondary',
  'Melee',
  'Arch-Melee',
  'Arch-Gun',
  'Warframes',
  'Archwing',
  'Sentinels',
  'Pets',
];

/**
 * Find an item by Item#uniqueName
 * @param {string} name string with which to query
 * @param {string} [locale='en'] locale to use for internationalization
 * @returns {Item}
 */
export const find = (name, locale = 'en') => {
  const items = new Items({
    category: categories,
    i18n: locale,
    i18nOnObject: true,
  });

  const item = items.find((i) => i.uniqueName === name);

  let itemClone = { ...item };
  if (locale !== 'en' && itemClone.i18n[locale] && itemClone.i18n[locale]) {
    itemClone = { ...itemClone, ...itemClone.i18n[locale] };

    if (itemClone.abilities) {
      itemClone.abilities = itemClone.abilities.map((ability) => ({
        uniqueName: ability.abilityUniqueName || ability.uniqueName || undefined,
        name: ability.abilityName || ability.name,
        description: ability.abilityDescription || ability.description,
        imageName: ability.imageName ?? undefined,
      }));
    }

    delete itemClone.i18n;
    return itemClone;
  }

  return item;
};

export const numberToLetter = (num) => String.fromCharCode(64 + (num + 1));
