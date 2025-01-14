// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {createSelector} from 'reselect';

import {getAllChannels} from 'mattermost-redux/selectors/entities/channels';

import type {GlobalState} from 'types/store';

export const getChannelsForChannelSelector = createSelector(
    'getChannelsForChannelSelector',
    (state: GlobalState) => state.views.channelSelectorModal.channels,
    getAllChannels,
    (channelIds, channels) => {
        if (channelIds) {
            return channelIds.map((id) => channels[id]);
        }
        return [];
    },
);
