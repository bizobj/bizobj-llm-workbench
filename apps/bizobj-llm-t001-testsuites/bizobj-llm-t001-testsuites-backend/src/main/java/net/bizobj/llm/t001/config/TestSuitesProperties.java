package net.bizobj.llm.t001.config;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(TestSuitesProperties.TESTSUITES_CONFIG_PREFIX)
public class TestSuitesProperties {
    public static final String TESTSUITES_CONFIG_PREFIX = "net.bizobj.llm.t001";

    /**
     * All the OpenAI backends
     */
    private List<OpenAIEndpoint> openaiEndpoints;

    public List<OpenAIEndpoint> getOpenaiEndpoints() {
        return openaiEndpoints;
    }
    public void setOpenaiEndpoints(List<OpenAIEndpoint> openaiEndpoints) {
        this.openaiEndpoints = openaiEndpoints;
    }

    /**
     * OpenAI Endpoint definition
     */
    public static class OpenAIEndpoint {
        /** The Identity Key for endpoint */
        private String key;
        /** The Description of endpoint */
        private String description;

        /** The Base URL of OpenAI Backend */
    	private String baseUrl;
        /** The API Key of OpenAI Backend */
        private String apiKey;

        public String getKey() {
            return key;
        }
        public void setKey(String key) {
            this.key = key;
        }
        public String getDescription() {
            return description;
        }
        public void setDescription(String description) {
            this.description = description;
        }
        public String getBaseUrl() {
            return baseUrl;
        }
        public void setBaseUrl(String baseUrl) {
            this.baseUrl = baseUrl;
        }
        public String getApiKey() {
            return apiKey;
        }
        public void setApiKey(String apiKey) {
            this.apiKey = apiKey;
        }
    }
}
