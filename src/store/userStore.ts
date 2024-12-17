import { create } from 'zustand'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const CURRENT_DATE = dayjs().endOf('day').toDate();
export const TIME_ZONE = dayjs.tz.guess();

interface UserState {
  name: string
  setName: (name: string) => void
  email: string
  setEmail: (email: string) => void
  modal: boolean
  setModal: (modal: boolean) => void
  selectedDate: Date
  setSelectedDate: (selectedDate: Date ) => void
  selectedTime: string
  setSelectedTime: (selectedTime: string) => void
  timeZone: string
  setTimeZone: (timeZone: string) => void
  currency: string
  setCurrency: (currency: string) => void
}

export const useUserStore = create<UserState>((set) => ({
  name: '',
  setName: (name) => set({ name }),
  email: '',
  setEmail: (email) => set({ email }),
  modal: false,
  setModal: (modal) => set({ modal }),
  selectedDate: CURRENT_DATE,
  setSelectedDate: (selectedDate) => set({ selectedDate }),
  selectedTime: '',
  setSelectedTime: (selectedTime) => set({ selectedTime }),
  timeZone: TIME_ZONE,
  setTimeZone: (timeZone) => set({ timeZone }),
  currency: 'eur',
  setCurrency: (currency) => set({ currency }),
}))