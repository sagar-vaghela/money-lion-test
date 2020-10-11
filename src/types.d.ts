type Form = {
  firstName: string;
  lastName: string;
  Email: string;
  dob: string;
  agreement1: boolean;
  agreement2: boolean;
};

type UserState = {
  currentComp: number | string;
  data: Form;
};
