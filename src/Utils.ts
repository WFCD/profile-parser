import Items, {
  type BundleofI18nBundle,
  type Category,
  type Item,
  type RawColors,
  type Warframe,
} from '@wfcd/items';
import { WorldStateDate } from 'warframe-worldstate-data/utilities';

/**
 * interface for DE's ID data
 */
export interface RawId {
  $oid: string;
}

// {"$date":{"$numberLong":"1462464026233"}}
export type RawDate = WorldStateDate;

export interface ProfileRawColors {
  t0?: number;
  t1?: number;
  t2?: number;
  t3?: number;
  m0?: number;
  m1?: number;
  en?: number;
  e1?: number;
}

/**
 * Map base10 int colors to hex color strings
 * @param colors color map
 */
export const mapToHex = (colors: ProfileRawColors): RawColors => {
  const hex: Record<string, string> = {};
  Object.entries(colors).forEach(([key, value]) => {
    if (value) hex[key] = Math.abs(value).toString(16).toUpperCase();
  });
  return hex as RawColors;
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

type RawAbility = {
  abilityUniqueName?: string;
  uniqueName?: string;
  abilityName?: string;
  name?: string;
  abilityDescription?: string;
  description?: string;
  imageName?: string;
};

type CleanAbility = {
  uniqueName?: string;
  name?: string;
  description?: string;
  imageName?: string;
};

/**
 * Find an item by Item#uniqueName
 * @param {string} name string with which to query
 * @param {string} locale locale to use for internationalization
 * @returns {Item}
 */
export const find = (name: string, locale: string = 'en'): Item => {
  const items = new Items({
    category: categories as (Category | 'SentinelWeapons')[],
    i18n: [locale],
    i18nOnObject: true,
  });

  const item = items.find((i) => i.uniqueName === name);

  // @ts-expect-error we know it's an item
  // biome-ignore lint/suspicious/noExplicitAny: it's pretty flexible here, any is fine
  let itemClone: Item & { i18n?: BundleofI18nBundle<any> } = { ...item };
  if (locale !== 'en' && itemClone.i18n?.[locale]) {
    // @ts-expect-error it's a known object type
    itemClone = { ...itemClone, ...itemClone.i18n[locale] };

    const warframe = itemClone as Warframe;
    if (warframe.abilities) {
      (warframe.abilities as CleanAbility[]) = warframe.abilities.map(
        (ability: RawAbility) => ({
          uniqueName:
            ability.abilityUniqueName || ability.uniqueName || undefined,
          name: ability.abilityName || ability.name,
          description: ability.abilityDescription || ability.description,
          imageName: ability.imageName ?? undefined,
        })
      );
    }

    delete itemClone.i18n;
    return itemClone;
  }

  return item as Item;
};

export const numberToLetter = (num: number) =>
  String.fromCharCode(64 + (num + 1));
