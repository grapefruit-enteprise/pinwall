import { browserHistory } from 'react-router';

export const CURRENT_NOTE = 'CURRENT_NOTE';

export function selectCurrentNote(note, path) {
  return {
      type: CURRENT_NOTE,
      payload: note
    }
}
