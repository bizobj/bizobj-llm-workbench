package net.bizobj.llm.t001.utils;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import org.springframework.util.StringUtils;

import net.bizobj.llm.t001.config.TestSuitesProperties.OpenAIEndpoint;

public class TestSuiteUtils {
    public static OpenAIEndpoint findOpenAIEndpoint(List<OpenAIEndpoint> openaiEndpoints, String key){
        if (null==openaiEndpoints || openaiEndpoints.isEmpty()){
            throw new IllegalArgumentException("OpenAIEndpoint List is Empty");
        }

        List<String> allKeys = new ArrayList<>();
        for (OpenAIEndpoint ep: openaiEndpoints){
            String endpointKey = ep.getKey();
            allKeys.add(endpointKey);
            if (Objects.equals(endpointKey, key)){
                return ep;
            }
        }

        //Can't find
        throw new IllegalArgumentException(
            "Key '"+key+"' is not found in ["+StringUtils.collectionToDelimitedString(allKeys, ", ")+"]");
    }
}
