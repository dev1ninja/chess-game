export const counterData = [
  {
    url: '/counters/br.png',
    position: [0, 0]
  },
  {
    url: '/counters/bn.png',
    position: [0, 1]
  },
  {
    url: '/counters/bb.png',
    position: [0, 2]
  },
  {
    url: '/counters/bk.png',
    position: [0, 3]
  },
  {
    url: '/counters/bq.png',
    position: [0, 4]
  },
  {
    url: '/counters/bb.png',
    position: [0, 5]
  },
  {
    url: '/counters/bn.png',
    position: [0, 6]
  },
  {
    url: '/counters/br.png',
    position: [0, 7]
  },
  ...Array.from(Array(8).keys()).map(val => (
    {
      url: '/counters/bp.png',
      position: [1, val]
    }
  )),
  ...Array.from(Array(8).keys()).map(val => (
    {
      url: '/counters/wp.png',
      position: [6, val]
    }
  )),
  {
    url: '/counters/wr.png',
    position: [7, 0]
  },
  {
    url: '/counters/wn.png',
    position: [7, 1]
  },
  {
    url: '/counters/wb.png',
    position: [7, 2]
  },
  {
    url: '/counters/wk.png',
    position: [7, 3]
  },
  {
    url: '/counters/wq.png',
    position: [7, 4]
  },
  {
    url: '/counters/wb.png',
    position: [7, 5]
  },
  {
    url: '/counters/wn.png',
    position: [7, 6]
  },
  {
    url: '/counters/wr.png',
    position: [7, 7]
  },
]