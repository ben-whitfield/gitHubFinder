class GitHub {
  constructor() {
    this.client_id = '39208bd4b43724abdf00';
    this.client_secret = '04425256fa34e18ea84c30f3647c58a5dd33401a';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      profile
    }

  }
}