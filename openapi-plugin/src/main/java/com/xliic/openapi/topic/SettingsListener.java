package com.xliic.openapi.topic;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicSettingsListener;

public interface SettingsListener {

  Topic<SettingsListener> TOPIC = new TopicSettingsListener<>(SettingsListener.class, Topic.BroadcastDirection.NONE);

  void propertiesUpdated(String key);
}
