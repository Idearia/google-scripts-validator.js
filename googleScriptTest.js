function googleScriptTest() {
  if ( ! validator.isEmail('foo@bar.com') ) {
    throw new Error("Failed validating valid email");
  }
  if ( validator.isEmail('foobar.com') ) {
    throw new Error("Failed validating wrong email");
  }
}
