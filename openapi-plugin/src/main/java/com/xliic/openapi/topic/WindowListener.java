package com.xliic.openapi.topic;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicWindowListener;

public interface WindowListener {

  Topic<WindowListener> TOPIC = new TopicWindowListener<>(WindowListener.class, Topic.BroadcastDirection.NONE);

  void handleToolWindowOpened(String id);
  void handleToolWindowRegistered(String id);
}