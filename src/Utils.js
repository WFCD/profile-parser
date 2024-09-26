import Items from 'warframe-items';

const find = (name, locale = 'en') => {
  const items = new Items({
    category: ['Skins', 'Primary', 'Secondary', 'Melee', 'Arch-Melee', 'Arch-Gun', 'Warframes', 'Archwing'],
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

export default find;
