import Events from '@/components/Events'

describe('Events', () => {
  it('has a created hook', () => {
    expect(typeof Events.created).toBe('function')
  })
})
