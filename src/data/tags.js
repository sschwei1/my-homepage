export const getTagByName = (name) => {
  const capitalizeName = () => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return tags[name.toLowerCase()] || {...tags.default, name: capitalizeName(name)};
}

const tags = {
  // Frontend
  'react': {
    name: 'React',
    icon: 'fa6-brands:react'
  },

  // Backend
  'golang': {
    name: 'Go',
    icon: 'fa6-brands:golang',
  },

  // Fallback
  'default': {
    icon: 'fa6-solid:code',
  }
};