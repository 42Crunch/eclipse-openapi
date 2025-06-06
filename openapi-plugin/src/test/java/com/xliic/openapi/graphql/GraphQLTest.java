package com.xliic.openapi.graphql;

import com.xliic.core.editor.Document;
import com.xliic.openapi.MockTestCase;
import com.xliic.openapi.parser.ast.Range;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;

import java.io.FileNotFoundException;
import java.util.List;

import static com.xliic.openapi.TestUtils.loadFile;
import static com.xliic.openapi.graphql.GraphQlUtils.getRangeByLocation;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

public class GraphQLTest extends MockTestCase {

    private final Document document = mock(Document.class);

    @Override
    public void setUp() throws Exception {
        super.setUp();
        when(document.getLineStartOffset(anyInt())).thenReturn(1);
    }

    public void testFileA() throws FileNotFoundException {

        final String text = loadFile("test/testData/graphql/a.graphql");
        SchemaParser schemaParser = new SchemaParser();
        TypeDefinitionRegistry reg = schemaParser.parse(text);

        List<String> items = List.of(
            "Query.Tweet(id: ID!)#15#17#43#15",
            "Query.User(id: ID!)#14#16#46#14",
            "Mutation.deleteTweet(id: ID!)#21#23#55#21",
            "Mutation.markTweetRead(id: ID!)#23#25#56#23",
            "Query.Notifications(limit: Int)#26#29#47#26",
            "Mutation.createTweet(body: String)#15#21#53#15",
            "Query.TweetsMeta().Meta.count: Int#12#15#36#12",
            "Query.NotificationsMeta().Meta.count: Int#12#15#36#12",
            "Query.Tweets(): [Tweet]#77#82#44#76",
            "Query.Notifications(): [Notification]#33#45#47#32",
            "Query.Tweets(limit: Int)#19#22#44#19",
            "Query.Tweets(skip: Int)#30#33#44#30",
            "Query.Tweets(sort_field: String)#47#53#44#47",
            "Query.Tweets(sort_order: String)#67#73#44#67",
            "Query.Notifications()[0].Notification.id: ID#9#11#30#9",
            "Query.Notifications()[0].Notification.type: String#11#17#32#11",
            "Query.Notifications()[0].Notification.date: ID!#11#15#31#11",
            "Query.Tweet().Tweet.id: ID!#9#11#1#9",
            "Query.Tweets()[0].Tweet.id: ID!#9#11#1#9",
            "Mutation.createTweet().Tweet.id: ID!#9#11#1#9",
            "Mutation.deleteTweet().Tweet.id: ID!#9#11#1#9",
            "Query.Tweet().Tweet.body: String#11#17#3#11",
            "Query.Tweets()[0].Tweet.body: String#11#17#3#11",
            "Mutation.createTweet().Tweet.body: String#11#17#3#11",
            "Mutation.deleteTweet().Tweet.body: String#11#17#3#11",
            "Query.Tweet().Tweet.date: ID!#11#15#5#11",
            "Query.Tweets()[0].Tweet.date: ID!#11#15#5#11",
            "Mutation.createTweet().Tweet.date: ID!#11#15#5#11",
            "Mutation.deleteTweet().Tweet.date: ID!#11#15#5#11",
            "Query.User().User.id: ID!#9#11#13#9",
            "Query.User().User.username: String#15#21#14#15",
            "Query.User().User.first_name: String#17#23#15#17",
            "Query.User().User.last_name: String#16#22#16#16",
            "Query.User().User.full_name: String#16#22#17#16",
            "Query.User().User.name: String#11#17#18#11",
            "Query.User().User.avatar_url: ID#17#20#19#17",
            "Query.Tweet().Tweet.Stats.Stat.views: Int#12#15#23#12",
            "Query.Tweet().Tweet.Stats.Stat.likes: Int#12#15#24#12",
            "Query.Tweet().Tweet.Stats.Stat.retweets: Int#15#18#25#15",
            "Query.Tweet().Tweet.Stats.Stat.responses: Int#16#19#26#16",
            "Query.Tweets()[0].Tweet.Stats.Stat.views: Int#12#15#23#12",
            "Query.Tweets()[0].Tweet.Stats.Stat.likes: Int#12#15#24#12",
            "Query.Tweets()[0].Tweet.Stats.Stat.retweets: Int#15#18#25#15",
            "Query.Tweets()[0].Tweet.Stats.Stat.responses: Int#16#19#26#16",
            "Mutation.createTweet().Tweet.Stats.Stat.views: Int#12#15#23#12",
            "Mutation.createTweet().Tweet.Stats.Stat.likes: Int#12#15#24#12",
            "Mutation.createTweet().Tweet.Stats.Stat.retweets: Int#15#18#25#15",
            "Mutation.createTweet().Tweet.Stats.Stat.responses: Int#16#19#26#16",
            "Mutation.deleteTweet().Tweet.Stats.Stat.views: Int#12#15#23#12",
            "Mutation.deleteTweet().Tweet.Stats.Stat.likes: Int#12#15#24#12",
            "Mutation.deleteTweet().Tweet.Stats.Stat.retweets: Int#15#18#25#15",
            "Mutation.deleteTweet().Tweet.Stats.Stat.responses: Int#16#19#26#16",
            "Query.Tweet().Tweet.Author.User.id: ID!#9#11#13#9",
            "Query.Tweets()[0].Tweet.Author.User.id: ID!#9#11#13#9",
            "Mutation.createTweet().Tweet.Author.User.id: ID!#9#11#13#9",
            "Mutation.deleteTweet().Tweet.Author.User.id: ID!#9#11#13#9",
            "Query.Tweet().Tweet.Author.User.username: String#15#21#14#15",
            "Query.Tweet().Tweet.Author.User.first_name: String#17#23#15#17",
            "Query.Tweet().Tweet.Author.User.last_name: String#16#22#16#16",
            "Query.Tweet().Tweet.Author.User.full_name: String#16#22#17#16",
            "Query.Tweet().Tweet.Author.User.name: String#11#17#18#11",
            "Query.Tweets()[0].Tweet.Author.User.username: String#15#21#14#15",
            "Query.Tweets()[0].Tweet.Author.User.first_name: String#17#23#15#17",
            "Query.Tweets()[0].Tweet.Author.User.last_name: String#16#22#16#16",
            "Query.Tweets()[0].Tweet.Author.User.full_name: String#16#22#17#16",
            "Query.Tweets()[0].Tweet.Author.User.name: String#11#17#18#11",
            "Mutation.createTweet().Tweet.Author.User.username: String#15#21#14#15",
            "Mutation.createTweet().Tweet.Author.User.first_name: String#17#23#15#17",
            "Mutation.createTweet().Tweet.Author.User.last_name: String#16#22#16#16",
            "Mutation.createTweet().Tweet.Author.User.full_name: String#16#22#17#16",
            "Mutation.createTweet().Tweet.Author.User.name: String#11#17#18#11",
            "Mutation.deleteTweet().Tweet.Author.User.username: String#15#21#14#15",
            "Mutation.deleteTweet().Tweet.Author.User.first_name: String#17#23#15#17",
            "Mutation.deleteTweet().Tweet.Author.User.last_name: String#16#22#16#16",
            "Mutation.deleteTweet().Tweet.Author.User.full_name: String#16#22#17#16",
            "Mutation.deleteTweet().Tweet.Author.User.name: String#11#17#18#11",
            "Query.Tweet().Tweet.Author.User.avatar_url: ID#17#20#19#17",
            "Query.Tweets()[0].Tweet.Author.User.avatar_url: ID#17#20#19#17",
            "Mutation.createTweet().Tweet.Author.User.avatar_url: ID#17#20#19#17",
            "Mutation.deleteTweet().Tweet.Author.User.avatar_url: ID#17#20#19#17"
        );
        for (String item : items) {
            String [] parts = item.split("#");
            String location = parts[0];
            String startOffset = parts[1];
            String endOffset = parts[2];
            String line = parts[3];
            Range range = getRangeByLocation(document, reg, location);
            assertNotNull(range);
            assertEquals(startOffset, String.valueOf(range.getStartOffset()));
            assertEquals(endOffset, String.valueOf(range.getEndOffset()));
            assertEquals(line, String.valueOf(range.getLine()));
        }
    }

    public void testFileB() throws FileNotFoundException {

        final String text = loadFile("test/testData/graphql/b.graphql");
        SchemaParser schemaParser = new SchemaParser();
        TypeDefinitionRegistry reg = schemaParser.parse(text);

        List<String> items = List.of(
                "Query.viewerApiKey(apiKey: String!)#24#30#4#24",
                "Query.viewerAnyAuth(accessToken.AccessTokenInput.apiKey: String)#30#46#9#30",
                "Mutation.mutationViewerApiKey(apiKey: String!)#32#38#115#32",
                "Mutation.mutationViewerAnyAuth(accessToken.AccessTokenInput.apiKey: String)#38#54#120#38",
                "Mutation.mutationViewerApiKey().MutationViewerApiKey.edituserinfo.ApiUserEditInfo.message: String!#12#18#152#12",
                "Mutation.mutationViewerAnyAuth().MutationViewerAnyAuth.edituserinfo.ApiUserEditInfo.message: String!#12#18#152#12",
                "Mutation.authenticate().ApiLogin.message: String!#12#18#124#12",
                "Mutation.authenticate().ApiLogin.token: String!#10#16#125#10",
                "Mutation.register().ApiRegister.message: String#12#18#137#12",
                "Mutation.register().ApiRegister.token: String#10#16#138#10",
                "Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.name: String!)#43#68#103#43",
                "Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.pass: String!)#43#68#103#43",
                "Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.user: String!)#43#68#103#43",
                "Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.name: String!)#39#64#110#39",
                "Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.pass: String!)#39#64#110#39",
                "Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.user: String!)#39#64#110#39",
                "Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.accountBalance: Int!)#43#68#103#43",
                "Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.accountBalance: Int!)#39#64#110#39",
                "Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers: [UsersListItem]#45#58#19#44",
                "Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch: [UsersItem]#7#16#30#6",
                "Query.viewerApiKey().ViewerApiKey.apiUserInfo: [UsersItem]#7#16#40#6",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers: [UsersListItem]#45#58#68#44",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch: [UsersItem]#7#16#79#6",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo: [UsersItem]#7#16#89#6",
                "Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers[0].UsersListItem.accountBalance: Float#19#24#45#19",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers[0].UsersListItem.accountBalance: Float#19#24#45#19",
                "Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers[0].UsersListItem.name: String!#9#15#46#9",
                "Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers[0].UsersListItem.user: String!#9#15#47#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers[0].UsersListItem.name: String!#9#15#46#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers[0].UsersListItem.user: String!#9#15#47#9",
                "Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.accountBalance: Float#19#24#52#19",
                "Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.accountBalance: Float#19#24#52#19",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.accountBalance: Float#19#24#52#19",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.accountBalance: Float#19#24#52#19",
                "Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.name: String#9#15#56#9",
                "Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.pass: String!#9#15#57#9",
                "Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.user: String!#9#15#58#9",
                "Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.name: String#9#15#56#9",
                "Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.pass: String!#9#15#57#9",
                "Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.user: String!#9#15#58#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.name: String#9#15#56#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.pass: String!#9#15#57#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.user: String!#9#15#58#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.name: String#9#15#56#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.pass: String!#9#15#57#9",
                "Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.user: String!#9#15#58#9"
        );
        for (String item : items) {
            String [] parts = item.split("#");
            String location = parts[0];
            String startOffset = parts[1];
            String endOffset = parts[2];
            String line = parts[3];
            Range range = getRangeByLocation(document, reg, location);
            assertNotNull(range);
            assertEquals(startOffset, String.valueOf(range.getStartOffset()));
            assertEquals(endOffset, String.valueOf(range.getEndOffset()));
            assertEquals(line, String.valueOf(range.getLine()));
        }
    }
}
