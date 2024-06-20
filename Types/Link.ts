export type LinkResponse = {
    id: string;
    name: string;
    description: string | null;
    domain: string;
    formCode: string;
    createdAt: Date;
    updatedAt: Date;
    Form: null | Form;
  }

export type Form = {
    id: string;
    title: string | null;
    description: string | null;
    isFavorite: boolean;
    formFields: Array<Object>;
  }