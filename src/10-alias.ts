(() => {
  type UserID = string | number | boolean;
  let userId: UserID;

  // literal types
  type Sizes = 'S' | 'M'| 'L';
  let shirtSize: Sizes;
  shirtSize = 'S';
  shirtSize = 'L'
  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`string ${userId.toLowerCase()}`);
    }
  }
  greeting(1, 'L');
})();
