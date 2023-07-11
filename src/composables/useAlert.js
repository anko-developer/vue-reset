import { useAlertStore } from '@/stores/alerts';
import { storeToRefs } from 'pinia';

export const useAlert = () => {
  const { alerts } = storeToRefs(useAlertStore());
  const { vAlert, vSuccess } = useAlertStore();
  return {
    alerts,
    vAlert,
    vSuccess,
  };
};
