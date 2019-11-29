const endpoint = "https://api.github.com/orgs/adalab/members";

const fetchUsers = () => {
  return fetch(endpoint).then(response => response.json());
};

export default fetchUsers;
