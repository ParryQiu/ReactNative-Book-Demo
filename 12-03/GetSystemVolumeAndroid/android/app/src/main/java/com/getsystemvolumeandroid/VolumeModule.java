package com.getsystemvolumeandroid;

import android.content.Context;
import android.media.AudioManager;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class VolumeModule extends ReactContextBaseJavaModule {
    private static final String TAG = "Volume";
    private AudioManager audio;

    public VolumeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        audio = (AudioManager) reactContext.getSystemService(Context.AUDIO_SERVICE);
    }

    @Override
    public String getName() {
        return TAG;
    }

    @ReactMethod
    public void getSystemVolume(Callback callback) {
        int currentVolume = audio.getStreamVolume(AudioManager.STREAM_MUSIC);
        int maxVolume = audio.getStreamMaxVolume(AudioManager.STREAM_MUSIC);
        callback.invoke(null, ((float) currentVolume / maxVolume));
    }
}