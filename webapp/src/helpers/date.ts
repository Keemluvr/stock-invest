import { DATE_FORMAT } from '@/constants'
import dayjs from 'dayjs'

export const formatDate = (date: string) => dayjs(date).format(DATE_FORMAT)
