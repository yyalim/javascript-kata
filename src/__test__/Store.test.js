import { appReducer, ADD_AUTHOR } from '../Components/Store';

const initialState = {
  authors: {},
  books: {},
  magazine: {}
}

describe('appReducer', () => {
  it('should add authors to state', () => {
    const action = {
      type: ADD_AUTHOR,
      author: { email: 'someone@example.com' },
    };

    expect(appReducer(initialState, action)).toMatchObject({
      authors: {
        'someone@example.com': { email: 'someone@example.com' },
      },
    });
  });
});
