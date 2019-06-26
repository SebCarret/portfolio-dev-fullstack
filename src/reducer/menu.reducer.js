export default function (about = {}, action) {
  if (action.type === 'onAboutClick' || action.type === 'onSkillsClick' || action.type === 'onPortfolioClick') {
    return action.type;
  } else {
    return about;
  };
}
