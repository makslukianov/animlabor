const selection = "user";
const lookupName = model.getName("lookup_".concat(selection));
// This becomes equivalent to:
// const lookupName = model.getName("lookup_" + selection);
// which is "model.getName("lookup_user")"
