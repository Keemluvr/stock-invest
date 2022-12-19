import { getEarningForecasts } from '../service'
import { DatePicker, Spin, Form, InputNumber, Button, Empty } from 'antd'
import * as Styled from '../style'
import { useStockState } from '@/contexts/stocks'
import { Card } from '@/components'
import dayjs, { Dayjs } from 'dayjs'
import { ICardDefault } from '@/components/card/View'
import { isEmpty } from 'lodash'

const EarningForecasts = () => {
  const { stockName } = useStockState()
  const [form] = Form.useForm()

  const today = dayjs()
  const { mutate, data = [], isLoading, isError } = getEarningForecasts()

  const onFinish = (allValues: {
    purchasedAmount: number
    purchasedAt: Dayjs
  }) => {
    mutate({
      stockName,
      purchasedAmount: allValues.purchasedAmount,
      purchasedAt: dayjs(allValues.purchasedAt).toDate()
    })
  }

  const disabledDate = (current: Dayjs) => {
    // Can not select days after today
    return current && current > today.endOf('day')
  }

  return (
    <Styled.StockSectionWrapper>
      <Styled.StockTitle data-test-id="earning-forecasts-title">
        Earning Forecasts
      </Styled.StockTitle>

      <Form form={form} onFinish={onFinish} layout="inline">
        <Form.Item
          label="Purchased At"
          name="purchasedAt"
          rules={[{ required: true, message: 'Please input a date' }]}
        >
          <DatePicker disabledDate={disabledDate} />
        </Form.Item>
        <Form.Item
          label="Purchased Amount"
          name="purchasedAmount"
          rules={[
            {
              required: true,
              message: 'Please input a purchased amount'
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Calculate
          </Button>
        </Form.Item>
      </Form>

      {isLoading ? (
        <Spin />
      ) : (
        <>
          {!isEmpty(data) ? (
            <Card withBorder default={data as ICardDefault} />
          ) : (
            <>{isError && <Empty />}</>
          )}
        </>
      )}
    </Styled.StockSectionWrapper>
  )
}

export default EarningForecasts
