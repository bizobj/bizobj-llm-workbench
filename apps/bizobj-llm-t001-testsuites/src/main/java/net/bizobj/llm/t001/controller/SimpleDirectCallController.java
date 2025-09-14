package net.bizobj.llm.t001.controller;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.openai.OpenAiChatModel;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.ai.openai.api.OpenAiApi;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.bizobj.llm.t001.config.TestSuitesProperties;
import net.bizobj.llm.t001.config.TestSuitesProperties.OpenAIEndpoint;
import net.bizobj.llm.t001.utils.TestSuiteUtils;

@RestController
@RequestMapping("/testsuite001")
public class SimpleDirectCallController {
    private TestSuitesProperties config;
    private OpenAiChatModel baseChatModel;

    public SimpleDirectCallController(OpenAiChatModel baseChatModel, TestSuitesProperties config){
        this.baseChatModel = baseChatModel;
        this.config = config;
    }

    @GetMapping("/simple-call/{endpoint}/{model}/{message}")
    public String chat(@PathVariable("endpoint") String endpointKey, 
                       @PathVariable("model") String modelName,
                       @PathVariable("message") String message) {

        OpenAIEndpoint endpoint = TestSuiteUtils.findOpenAIEndpoint(config.getOpenaiEndpoints(), endpointKey);

        OpenAiApi api = OpenAiApi.builder()
            .baseUrl(endpoint.getBaseUrl())
            .apiKey(endpoint.getApiKey())
            .build();
        OpenAiChatOptions options = OpenAiChatOptions.builder()
            .model(modelName)
            .build();        
        OpenAiChatModel chatModel = baseChatModel.mutate()
            .openAiApi(api)
            .defaultOptions(options)
            .build();

        String reply = ChatClient.builder(chatModel).build().prompt(message).call().content();
        return reply;
    }
}
