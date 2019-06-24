import * as sourcegraph from 'sourcegraph'
import { ExtensionsControllerProps } from '../../../../../shared/src/extensions/controller'
import * as GQL from '../../../../../shared/src/graphql/schema'
import { createThread } from '../../../discussions/backend'
import { computeDiff } from '../../threads/detail/changes/computeDiff'
import { ThreadSettings } from '../../threads/settings'

const FAKE_PROJECT_ID = 'UHJvamVjdDox' // TODO!(sqs)

/**
 * The initial status for a changeset thread when creating it. {@link GQL.ThreadStatus.OPEN_ACTIVE}
 * is for "Create changeset" and {@link GQL.ThreadStatus.PREVIEW} is for "Preview changeset".
 */
export type ChangesetCreationStatus = GQL.ThreadStatus.OPEN_ACTIVE | GQL.ThreadStatus.PREVIEW

/**
 * Create a preview changeset by applying the {@link codeAction}.
 */
export async function createChangeset(
    { extensionsController }: ExtensionsControllerProps,
    codeAction: sourcegraph.CodeAction,
    creationStatus: ChangesetCreationStatus
): Promise<Pick<GQL.IDiscussionThread, 'id' | 'idWithoutKind' | 'url' | 'status'>> {
    const settings: ThreadSettings = { previewChangesetDiff: await computeDiff(extensionsController, [codeAction]) }
    return createThread({
        type: GQL.ThreadType.CHANGESET,
        title: codeAction.title,
        contents: '',
        project: FAKE_PROJECT_ID,
        settings: JSON.stringify(settings, null, 2),
        status: creationStatus,
    }).toPromise()
}