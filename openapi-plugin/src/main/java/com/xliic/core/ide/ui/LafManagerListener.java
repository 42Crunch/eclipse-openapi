package com.xliic.core.ide.ui;

import org.jetbrains.annotations.NotNull;
import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicLafListener;

public interface LafManagerListener {

	  Topic<LafManagerListener> TOPIC = new TopicLafListener<>(LafManagerListener.class, Topic.BroadcastDirection.NONE);

	  void lookAndFeelChanged(@NotNull LafManager manager);
}
