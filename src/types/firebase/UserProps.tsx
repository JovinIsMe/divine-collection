type UserProps = {
  id: string
  name: string
  desc?: string
  phone_number?: string
  email?: string
  path?: string
  // password:
  // created_at: 
  // last_sign_in: 
};

export const userInit: UserProps = {
  id: "loading...",
  name: "loading...",
  desc: "loading...",
  phone_number: "loading...",
  email: "loading...",
}

export const userNotExist: UserProps = {
  id: "not exist",
  name: "not exist",
  desc: "not exist",
  phone_number: "not exist",
  email: "not exist",
}

export default UserProps;