// src/store/FormStore.ts
import { create } from 'zustand';

type FormState = {
  idNumber: string;
  receipt: string;
  packageImage: File | null;
  status: string;
  bankAccountInfo: string;
  notes: string;
  setField: (field: keyof FormState, value: string | File | null) => void;
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
