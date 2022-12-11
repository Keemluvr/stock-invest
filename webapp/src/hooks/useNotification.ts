import { toast, ToastOptions } from 'react-toastify'

export const notificationConfig: ToastOptions = {
  position: 'top-right',
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true
}

export const useNotification = () => {
  const emitSuccess = (message: string) =>
    toast.success(message, notificationConfig)

  const emitError = (message: string) =>
    toast.error(message, notificationConfig)

  const emitInfo = (message: string) => toast.info(message, notificationConfig)

  const emitWarning = (message: string) =>
    toast.warn(message, notificationConfig)

  return {
    emitSuccess,
    emitError,
    emitInfo,
    emitWarning
  }
}
