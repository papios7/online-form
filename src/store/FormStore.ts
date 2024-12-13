// src/store/FormStore.ts
import { create } from 'zustand';

type FormState = {
  idNumber: string;
  receipt: string;
  packageImage: File | null;
  status: string;
  bankAccountInfo1: string;
  bankAccountInfo2: string;
  bankAccountInfo3: string;
  bankAccountInfo4: string;
  totalvalue:string;
  notes: string;
  setField: (field: keyof FormState, value: string | File | null) => void;
};

export const useFormStore = create<FormState>((set) => ({
  idNumber: '',
  receipt: '',
  packageImage: null,
  status: '',
  bankAccountInfo1: '',
  bankAccountInfo2: '',
  bankAccountInfo3: '',
  bankAccountInfo4: '',
  totalvalue: '',
  notes: '',
  setField: (field, value) => set({ [field]: value }),
}));
