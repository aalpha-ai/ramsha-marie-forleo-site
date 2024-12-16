import { create } from 'zustand'
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

export const CURRENT_DATE = dayjs().endOf('day').toDate();
export const TIME_ZONE = dayjs.tz.guess();

interface UserState {
  modal: boolean
  setModal: (modal: boolean) => void
}

export const useUserStore = create<UserState>((set) => ({
  modal: false,
  setModal: (modal) => set({ modal }),
}))