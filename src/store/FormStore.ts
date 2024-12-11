import create from 'zustand';

type FormState = {
  idNumber: string;
  receipt: string;
  packageImage: File | null;
  status: string;
  bankAccountInfo: string;
  notes: string;
  setField: (field: keyof FormState, value: any) => void;
};

export const useFormStore = create<FormState>((set) => ({
  idNumber: '',
  receipt: '',
  packageImage: null,
  status: '',
  bankAccountInfo: '',
  notes: '',
  setField: (field, value) => set({ [field]: value }),
}));
