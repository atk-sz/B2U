import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import JitsiMeet, { JitsiMeetView } from 'react-native-jitsi-meet';

const CreateRoom = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const url = 'url/aaa'
        const userInfo = { displayName: 'User', email: 'user@example.com', avatar: 'https:/gravatar.com/avatar/abc123' };
        JitsiMeet.call(url, userInfo);
        setLoading(false)
    }, [])

    const onConferenceTerminated = (nativeEvent) => {
        /* Conference terminated event */
    }

    const onConferenceJoined = (nativeEvent) => {
        /* Conference joined event */
    }

    const onConferenceWillJoin = (nativeEvent) => {
        /* Conference will join event */
    }

    return (
        <View style={{ flex: 1 }}>
            {
                loading ? <Text>loading</Text> : (
                    <View style={{ backgroundColor: 'black', flex: 1 }}>
                        <JitsiMeetView onConferenceTerminated={onConferenceTerminated} onConferenceJoined={onConferenceJoined} onConferenceWillJoin={onConferenceWillJoin} style={{ flex: 1, height: '100%', width: '100%' }} />
                    </View>
                )
            }
        </View>
    );
};

export default CreateRoom;