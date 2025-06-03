package net.bizobj.ai.apps.testsuites.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.util.StringUtils;

import net.bizobj.ai.apps.testsuites.config.TestSuitesProperties.OpenAIEndpoint;

public class TestSuiteUtils {
    public static OpenAIEndpoint findOpenAIEndpoint(List<OpenAIEndpoint> openaiEndpoints, String key){
        if (null==openaiEndpoints || openaiEndpoints.isEmpty()){
            throw new IllegalArgumentException("OpenAIEndpoint List is Empty");
        }

        List<String> allKeys = new ArrayList<>();
        for (OpenAIEndpoint ep: openaiEndpoints){
            String epKey = ep.getKey();
            allKeys.add(epKey);
            if (Objects.equals(epKey, key)){
                return ep;
            }
        }

        //Can't find
        throw new IllegalArgumentException(
            "Key '"+key+"' is not found in ["+StringUtils.collectionToDelimitedString(allKeys, ", ")+"]");
    }
}
