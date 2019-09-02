import { ProfilerOnRenderCallback } from 'react'

export const onRender: ProfilerOnRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions,
): void => {
  console.info('ID:', id)
  console.info('Phase:', phase)
  console.info('Actual Duration:', actualDuration)
  console.info('Base Duration:', baseDuration)
  console.info('Start Time:', startTime)
  console.info('Commit Time:', commitTime)
  console.info('Inter Actions:', interactions)
}
