import { InMemoryDbService } from 'angular-in-memory-web-api';

import { ITask } from './compounds/task-detail/task.model';
import { ICompound, Compound } from './compounds/compound.model';

export class APIData implements InMemoryDbService {

    createDb() {
        const compounds: ICompound[] = [
            {
                'id': 1,
                'name': 'Compound-gregergrgegergergrgergerguiiuuiguiguiuioh',
                'code': 'AMK-100',
                'selectivityConditions': 'Selective 1',
                'temperature': 20.22,
                'formula': 'C3H2O5',
                'pinned': true,
                'notes': '<ul><li>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 2,
                'name': 'Compound 2',
                'code': 'AMK-200',
                'selectivityConditions': 'Selective 2',
                'temperature': 20.26,
                'formula': 'C3H2O5',
                'pinned': false,
                'notes': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 3,
                'name': 'Compound 3',
                'code': 'AMK-300',
                'selectivityConditions': 'Selective 3',
                'temperature': 30.13,
                'formula': 'C3H2O5',
                'pinned': true,
                'notes': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 4,
                'name': 'Compound 4',
                'code': 'AMK-400',
                'selectivityConditions': 'Selective 4',
                'temperature': 30.13,
                'formula': 'C3H2O5',
                'pinned': false,
                'notes': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 5,
                'name': 'Compound 5',
                'code': 'AMK-500',
                'selectivityConditions': 'Selective 5',
                'temperature': 30.13,
                'formula': 'C3H2O5',
                'pinned': true,
                'notes': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 6,
                'name': 'Compound 6',
                'code': 'AMK-600',
                'selectivityConditions': 'Selective 6',
                'temperature': 30.13,
                'formula': 'C3H2O5',
                'pinned': false,
                'notes': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            }
        ]
        const tasks: ITask[] = [
            {
                'id': 1,
                'compoundId': 1,
                'name': 'PXRD 1',
                'data': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
                        {
                'id': 2,
                'compoundId': 1,
                'name': 'PXRD 2',
                'data': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 3,
                'compoundId': 1,
                'name': 'PXRD 3',
                'data': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 4,
                'compoundId': 1,
                'name': 'PXRD 4',
                'data': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 5,
                'compoundId': 1,
                'name': 'PXRD 5',
                'data': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 6,
                'compoundId': 1,
                'name': 'PXRD 6',
                'data': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            },
            {
                'id': 7,
                'compoundId': 1,
                'name': 'PXRD 7',
                'data': '<ul><li>aa</li><li>bb</li><li>cc</li></ul>'
            }
        ];
        return { compounds: compounds, tasks: tasks };
    }
}
