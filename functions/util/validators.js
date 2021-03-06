const isEmpty = (string) => (string.trim() === "" ? true : false);
const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) {
    return true;
  } else {
    return false;
  }
};

exports.validateSignupData = (newUser) => {
  let errors = {};
  if (isEmpty(newUser.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(newUser.email)) {
    errors.email = "Must be a valid email address";
  }

  if (isEmpty(newUser.password)) {
    errors.password = "Must not be empty";
  }
  if (newUser.password !== newUser.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }
  if (isEmpty(newUser.handle)) {
    errors.handle = "Must not be empty";
  }
  if (isEmpty(newUser.fullName)) {
    errors.handle = "Must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (user) => {
  let errors = {};
  if (isEmpty(user.email)) {
    errors.email = "Must not be empty";
  }
  if (isEmpty(user.password)) {
    errors.password = "Must not be empty";
  }

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

//REDUCE USER DETAILS
exports.reduceUserDetails = (data) => {
  let userDetails = {};

  if (!isEmpty(data.bio.trim())) {
    userDetails.bio = data.bio;
  }
  if (!isEmpty(data.website.trim())) {
    if (data.website.trim().substring(0, 4) !== "http") {
      userDetails.website = `http://${data.website.trim()}`;
    } else {
      userDetails.website = data.website;
    }
  }
  if (!isEmpty(data.location.trim())) {
    userDetails.location = data.location;
  }
  if (!isEmpty(data.dateOfBirth.trim())) {
    userDetails.dateOfBirth = data.dateOfBirth;
  }
  if (!isEmpty(data.bloodGroup.trim())) {
    userDetails.bloodGroup = data.bloodGroup;
  }
  if (!isEmpty(data.bloodGenotype.trim())) {
    userDetails.bloodGenotype = data.bloodGenotype;
  }
  if (!isEmpty(data.rhesusFactor.trim())) {
    userDetails.rhesusFactor = data.rhesusFactor;
  }
  if (!isEmpty(data.healthServiceProvider.trim())) {
    userDetails.healthServiceProvider = data.healthServiceProvider;
  }
  return userDetails;
};

//REDUCE MEDICAL REPORTS PAGE
// exports.reduceMedicalReports = (data) => {
//   let userDetails = {};

//   if (!isEmpty(data.bio.trim())) {
//     userDetails.bio = data.bio;
//   }
//   if (!isEmpty(data.website.trim())) {
//     if (data.website.trim().substring(0, 4) !== "http") {
//       userDetails.website = `http://${data.website.trim()}`;
//     } else {
//       userDetails.website = data.website;
//     }
//   }
//   if (!isEmpty(data.location.trim())) {
//     userDetails.location = data.location;
//   }
//   if (!isEmpty(data.dateOfBirth.trim())) {
//     userDetails.dateOfBirth = data.dateOfBirth;
//   }
//   if (!isEmpty(data.bloodGroup.trim())) {
//     userDetails.bloodGroup = data.bloodGroup;
//   }
//   if (!isEmpty(data.bloodGenotype.trim())) {
//     userDetails.bloodGenotype = data.bloodGenotype;
//   }
//   if (!isEmpty(data.rhesusFactor.trim())) {
//     userDetails.rhesusFactor = data.rhesusFactor;
//   }
//   if (!isEmpty(data.healthServiceProvider.trim())) {
//     userDetails.healthServiceProvider = data.healthServiceProvider;
//   }
//   return userDetails;
// };
