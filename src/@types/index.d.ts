import { AwsFunction } from 'serverless/plugins/aws/provider/awsProvider'

export interface AutoscalingConfig extends AwsFunctionConfig {
  function: string
  name: string
}

export interface Options {
  region: string
  service: string
  stage: string
}

export interface ConcurrencyFunction extends AwsFunction {
  concurrencyAutoscaling: boolean | AwsFunctionConfig
}

export interface AwsFunctionConfig {
  enabled?: boolean
  maximum?: number
  minimum?: number
  usage?: number
  scaleInCooldown?: number
  scaleOutCooldown?: number
  customMetric?: CustomMetricConfig
  alias?: string
  scheduledActions?: ScheduledAction[]
}

export interface CustomMetricConfig {
  dimensions?: Dimension[]
  metricName?: string
  namespace?: string
  statistic?: string
  unit?: string
  /**
   * For each alarm, you can specify CloudWatch to treat missing data points as any of the following:
   *
   * notBreaching – Missing data points are treated as "good" and within the threshold
   *
   * breaching – Missing data points are treated as "bad" and breaching the threshold
   *
   * ignore – The current alarm state is maintained
   *
   * missing – If all data points in the alarm evaluation range are missing, the alarm transitions to INSUFFICIENT_DATA.
   */
  treatMissing?: string
}

export interface Dimension {
  name: string
  value: string
}

export interface ScheduledAction {
  name: string
  startTime?: string
  endTime?: string
  timezone?: string
  schedule: string
  action: ScalableTargetAction
}

export interface ScalableTargetAction {
  maximum?: number
  minimum?: number
}
