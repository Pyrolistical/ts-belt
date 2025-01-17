import { pipe, O, A, R } from '../..'

describe('toResult', () => {
  it('returns Error', () => {
    expect(pipe(O.fromNullable(null), O.toResult('this is bad'))).toEqual(
      R.Error('this is bad'),
    )
    expect(
      pipe(
        O.fromNullable({ prop: null }),
        O.mapNullable(obj => obj.prop),
        O.toResult('this is bad'),
      ),
    ).toEqual(R.Error('this is bad'))
  })

  it('returns Ok', () => {
    expect(pipe(O.fromNullable('value'), O.toResult('this is bad'))).toEqual(
      R.Ok('value'),
    )
    expect(
      pipe(
        O.fromNullable({ prop: 'value' }),
        O.mapNullable(obj => obj.prop),
        O.toResult('this is bad'),
      ),
    ).toEqual(R.Ok('value'))
  })

  it('*', () => {
    expect(
      pipe(
        O.fromNullable(['hello', 'world']),
        O.flatMap(A.takeExactly(2)),
        O.toResult('oops!'),
      ),
    ).toEqual(R.Ok(['hello', 'world']))

    expect(
      pipe(
        O.fromNullable([]),
        O.flatMap(A.takeExactly(2)),
        O.toResult('oops!'),
      ),
    ).toEqual(R.Error('oops!'))
  })
})
