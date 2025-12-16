package com.xliic.openapi.graphql;

import com.xliic.core.editor.Document;
import com.xliic.openapi.MockTestCase;
import com.xliic.openapi.graphql.locator.GraphQlHandler;
import com.xliic.openapi.graphql.locator.GraphQlPosition;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;

import java.io.FileNotFoundException;
import java.util.List;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.xliic.openapi.TestUtils.loadFile;
import static com.xliic.openapi.TestUtils.readAllLines;
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

        String text = loadFile("test/testData/graphql/a.graphql");
        SchemaParser schemaParser = new SchemaParser();
        TypeDefinitionRegistry reg = schemaParser.parse(text);

        Map<String, GraphQlPosition> exp = new HashMap<>();
        exp.put("Query.Tweet(id: ID!)", new GraphQlPosition(44, 15, 2, 0));
        exp.put("Query.User(id: ID!)", new GraphQlPosition(47, 14, 2, 0));
        exp.put("Mutation.deleteTweet(id: ID!)", new GraphQlPosition(56, 21, 2, 0));
        exp.put("Mutation.markTweetRead(id: ID!)", new GraphQlPosition(57, 23, 2, 0));
        exp.put("Query.Notifications(limit: Int)", new GraphQlPosition(48, 26, 3, 0));
        exp.put("Mutation.createTweet(body: String)", new GraphQlPosition(54, 15, 6, 0));
        exp.put("Query.TweetsMeta().Meta.count: Int", new GraphQlPosition(37, 12, 3, 0));
        exp.put("Query.NotificationsMeta().Meta.count: Int", new GraphQlPosition(37, 12, 3, 0));
        exp.put("Query.Tweets(): [Tweet]", new GraphQlPosition(45, 77, 5, 0));
        exp.put("Query.Notifications(): [Notification]", new GraphQlPosition(48, 33, 12, 0));
        exp.put("Query.Tweets(limit: Int)", new GraphQlPosition(45, 19, 3, 0));
        exp.put("Query.Tweets(skip: Int)", new GraphQlPosition(45, 30, 3, 0));
        exp.put("Query.Tweets(sort_field: String)", new GraphQlPosition(45, 47, 6, 0));
        exp.put("Query.Tweets(sort_order: String)", new GraphQlPosition(45, 67, 6, 0));
        exp.put("Query.Notifications()[0].Notification.id: ID", new GraphQlPosition(31, 9, 2, 0));
        exp.put("Query.Notifications()[0].Notification.type: String", new GraphQlPosition(33, 11, 6, 0));
        exp.put("Query.Notifications()[0].Notification.date: ID!", new GraphQlPosition(32, 11, 4, 0));
        exp.put("Query.Tweet().Tweet.id: ID!", new GraphQlPosition(2, 9, 2, 0));
        exp.put("Query.Tweets()[0].Tweet.id: ID!", new GraphQlPosition(2, 9, 2, 0));
        exp.put("Mutation.createTweet().Tweet.id: ID!", new GraphQlPosition(2, 9, 2, 0));
        exp.put("Mutation.deleteTweet().Tweet.id: ID!", new GraphQlPosition(2, 9, 2, 0));
        exp.put("Query.Tweet().Tweet.body: String", new GraphQlPosition(4, 11, 6, 0));
        exp.put("Query.Tweets()[0].Tweet.body: String", new GraphQlPosition(4, 11, 6, 0));
        exp.put("Mutation.createTweet().Tweet.body: String", new GraphQlPosition(4, 11, 6, 0));
        exp.put("Mutation.deleteTweet().Tweet.body: String", new GraphQlPosition(4, 11, 6, 0));
        exp.put("Query.Tweet().Tweet.date: ID!", new GraphQlPosition(6, 11, 4, 0));
        exp.put("Query.Tweets()[0].Tweet.date: ID!", new GraphQlPosition(6, 11, 4, 0));
        exp.put("Mutation.createTweet().Tweet.date: ID!", new GraphQlPosition(6, 11, 4, 0));
        exp.put("Mutation.deleteTweet().Tweet.date: ID!", new GraphQlPosition(6, 11, 4, 0));
        exp.put("Query.User().User.id: ID!", new GraphQlPosition(14, 9, 2, 0));
        exp.put("Query.User().User.username: String", new GraphQlPosition(15, 15, 6, 0));
        exp.put("Query.User().User.first_name: String", new GraphQlPosition(16, 17, 6, 0));
        exp.put("Query.User().User.last_name: String", new GraphQlPosition(17, 16, 6, 0));
        exp.put("Query.User().User.full_name: String", new GraphQlPosition(18, 16, 6, 0));
        exp.put("Query.User().User.name: String", new GraphQlPosition(19, 11, 6, 0));
        exp.put("Query.User().User.avatar_url: ID", new GraphQlPosition(20, 17, 3, 0));
        exp.put("Query.Tweet().Tweet.Stats.Stat.views: Int", new GraphQlPosition(24, 12, 3, 0));
        exp.put("Query.Tweet().Tweet.Stats.Stat.likes: Int", new GraphQlPosition(25, 12, 3, 0));
        exp.put("Query.Tweet().Tweet.Stats.Stat.retweets: Int", new GraphQlPosition(26, 15, 3, 0));
        exp.put("Query.Tweet().Tweet.Stats.Stat.responses: Int", new GraphQlPosition(27, 16, 3, 0));
        exp.put("Query.Tweets()[0].Tweet.Stats.Stat.views: Int", new GraphQlPosition(24, 12, 3, 0));
        exp.put("Query.Tweets()[0].Tweet.Stats.Stat.likes: Int", new GraphQlPosition(25, 12, 3, 0));
        exp.put("Query.Tweets()[0].Tweet.Stats.Stat.retweets: Int", new GraphQlPosition(26, 15, 3, 0));
        exp.put("Query.Tweets()[0].Tweet.Stats.Stat.responses: Int", new GraphQlPosition(27, 16, 3, 0));
        exp.put("Mutation.createTweet().Tweet.Stats.Stat.views: Int", new GraphQlPosition(24, 12, 3, 0));
        exp.put("Mutation.createTweet().Tweet.Stats.Stat.likes: Int", new GraphQlPosition(25, 12, 3, 0));
        exp.put("Mutation.createTweet().Tweet.Stats.Stat.retweets: Int", new GraphQlPosition(26, 15, 3, 0));
        exp.put("Mutation.createTweet().Tweet.Stats.Stat.responses: Int", new GraphQlPosition(27, 16, 3, 0));
        exp.put("Mutation.deleteTweet().Tweet.Stats.Stat.views: Int", new GraphQlPosition(24, 12, 3, 0));
        exp.put("Mutation.deleteTweet().Tweet.Stats.Stat.likes: Int", new GraphQlPosition(25, 12, 3, 0));
        exp.put("Mutation.deleteTweet().Tweet.Stats.Stat.retweets: Int", new GraphQlPosition(26, 15, 3, 0));
        exp.put("Mutation.deleteTweet().Tweet.Stats.Stat.responses: Int", new GraphQlPosition(27, 16, 3, 0));
        exp.put("Query.Tweet().Tweet.Author.User.id: ID!", new GraphQlPosition(14, 9, 2, 0));
        exp.put("Query.Tweets()[0].Tweet.Author.User.id: ID!", new GraphQlPosition(14, 9, 2, 0));
        exp.put("Mutation.createTweet().Tweet.Author.User.id: ID!", new GraphQlPosition(14, 9, 2, 0));
        exp.put("Mutation.deleteTweet().Tweet.Author.User.id: ID!", new GraphQlPosition(14, 9, 2, 0));
        exp.put("Query.Tweet().Tweet.Author.User.username: String", new GraphQlPosition(15, 15, 6, 0));
        exp.put("Query.Tweet().Tweet.Author.User.first_name: String", new GraphQlPosition(16, 17, 6, 0));
        exp.put("Query.Tweet().Tweet.Author.User.last_name: String", new GraphQlPosition(17, 16, 6, 0));
        exp.put("Query.Tweet().Tweet.Author.User.full_name: String", new GraphQlPosition(18, 16, 6, 0));
        exp.put("Query.Tweet().Tweet.Author.User.name: String", new GraphQlPosition(19, 11, 6, 0));
        exp.put("Query.Tweets()[0].Tweet.Author.User.username: String", new GraphQlPosition(15, 15, 6, 0));
        exp.put("Query.Tweets()[0].Tweet.Author.User.first_name: String", new GraphQlPosition(16, 17, 6, 0));
        exp.put("Query.Tweets()[0].Tweet.Author.User.last_name: String", new GraphQlPosition(17, 16, 6, 0));
        exp.put("Query.Tweets()[0].Tweet.Author.User.full_name: String", new GraphQlPosition(18, 16, 6, 0));
        exp.put("Query.Tweets()[0].Tweet.Author.User.name: String", new GraphQlPosition(19, 11, 6, 0));
        exp.put("Mutation.createTweet().Tweet.Author.User.username: String", new GraphQlPosition(15, 15, 6, 0));
        exp.put("Mutation.createTweet().Tweet.Author.User.first_name: String", new GraphQlPosition(16, 17, 6, 0));
        exp.put("Mutation.createTweet().Tweet.Author.User.last_name: String", new GraphQlPosition(17, 16, 6, 0));
        exp.put("Mutation.createTweet().Tweet.Author.User.full_name: String", new GraphQlPosition(18, 16, 6, 0));
        exp.put("Mutation.createTweet().Tweet.Author.User.name: String", new GraphQlPosition(19, 11, 6, 0));
        exp.put("Mutation.deleteTweet().Tweet.Author.User.username: String", new GraphQlPosition(15, 15, 6, 0));
        exp.put("Mutation.deleteTweet().Tweet.Author.User.first_name: String", new GraphQlPosition(16, 17, 6, 0));
        exp.put("Mutation.deleteTweet().Tweet.Author.User.last_name: String", new GraphQlPosition(17, 16, 6, 0));
        exp.put("Mutation.deleteTweet().Tweet.Author.User.full_name: String", new GraphQlPosition(18, 16, 6, 0));
        exp.put("Mutation.deleteTweet().Tweet.Author.User.name: String", new GraphQlPosition(19, 11, 6, 0));
        exp.put("Query.Tweet().Tweet.Author.User.avatar_url: ID", new GraphQlPosition(20, 17, 3, 0));
        exp.put("Query.Tweets()[0].Tweet.Author.User.avatar_url: ID", new GraphQlPosition(20, 17, 3, 0));
        exp.put("Mutation.createTweet().Tweet.Author.User.avatar_url: ID", new GraphQlPosition(20, 17, 3, 0));
        exp.put("Mutation.deleteTweet().Tweet.Author.User.avatar_url: ID", new GraphQlPosition(20, 17, 3, 0));

        assertPositions(new GraphQlHandler(reg), exp);
    }

    public void testFileB() throws FileNotFoundException {

        String text = loadFile("test/testData/graphql/b.graphql");
        SchemaParser schemaParser = new SchemaParser();
        TypeDefinitionRegistry reg = schemaParser.parse(text);

        Map<String, GraphQlPosition> exp = new HashMap<>();
        exp.put("Query.viewerApiKey(apiKey: String!)", new GraphQlPosition(5, 24, 6, 0));
        exp.put("Query.viewerAnyAuth(accessToken.AccessTokenInput.apiKey: String)", new GraphQlPosition(10, 30, 16, 0));
        exp.put("Mutation.mutationViewerApiKey(apiKey: String!)", new GraphQlPosition(116, 32, 6, 0));
        exp.put("Mutation.mutationViewerAnyAuth(accessToken.AccessTokenInput.apiKey: String)", new GraphQlPosition(121, 38, 16, 0));
        exp.put("Mutation.mutationViewerApiKey().MutationViewerApiKey.edituserinfo.ApiUserEditInfo.message: String!", new GraphQlPosition(153, 12, 6, 0));
        exp.put("Mutation.mutationViewerAnyAuth().MutationViewerAnyAuth.edituserinfo.ApiUserEditInfo.message: String!", new GraphQlPosition(153, 12, 6, 0));
        exp.put("Mutation.authenticate().ApiLogin.message: String!", new GraphQlPosition(125, 12, 6, 0));
        exp.put("Mutation.authenticate().ApiLogin.token: String!", new GraphQlPosition(126, 10, 6, 0));
        exp.put("Mutation.register().ApiRegister.message: String", new GraphQlPosition(138, 12, 6, 0));
        exp.put("Mutation.register().ApiRegister.token: String", new GraphQlPosition(139, 10, 6, 0));
        exp.put("Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.name: String!)", new GraphQlPosition(104, 43, 25, 0));
        exp.put("Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.pass: String!)", new GraphQlPosition(104, 43, 25, 0));
        exp.put("Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.user: String!)", new GraphQlPosition(104, 43, 25, 0));
        exp.put("Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.name: String!)", new GraphQlPosition(111, 39, 25, 0));
        exp.put("Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.pass: String!)", new GraphQlPosition(111, 39, 25, 0));
        exp.put("Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.user: String!)", new GraphQlPosition(111, 39, 25, 0));
        exp.put("Mutation.authenticate(userRegistrationDataInput.UserRegistrationDataInput.accountBalance: Int!)", new GraphQlPosition(104, 43, 25, 0));
        exp.put("Mutation.register(userRegistrationDataInput.UserRegistrationDataInput.accountBalance: Int!)", new GraphQlPosition(111, 39, 25, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers: [UsersListItem]", new GraphQlPosition(20, 45, 13, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch: [UsersItem]", new GraphQlPosition(31, 7, 9, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiUserInfo: [UsersItem]", new GraphQlPosition(41, 7, 9, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers: [UsersListItem]", new GraphQlPosition(69, 45, 13, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch: [UsersItem]", new GraphQlPosition(80, 7, 9, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo: [UsersItem]", new GraphQlPosition(90, 7, 9, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers[0].UsersListItem.accountBalance: Float", new GraphQlPosition(46, 19, 5, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers[0].UsersListItem.accountBalance: Float", new GraphQlPosition(46, 19, 5, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers[0].UsersListItem.name: String!", new GraphQlPosition(47, 9, 6, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminAllUsers[0].UsersListItem.user: String!", new GraphQlPosition(48, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers[0].UsersListItem.name: String!", new GraphQlPosition(47, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminAllUsers[0].UsersListItem.user: String!", new GraphQlPosition(48, 9, 6, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.accountBalance: Float", new GraphQlPosition(53, 19, 5, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.accountBalance: Float", new GraphQlPosition(53, 19, 5, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.accountBalance: Float", new GraphQlPosition(53, 19, 5, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.accountBalance: Float", new GraphQlPosition(53, 19, 5, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.name: String", new GraphQlPosition(57, 9, 6, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.pass: String!", new GraphQlPosition(58, 9, 6, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiAdminUsersSearch[0].UsersItem.user: String!", new GraphQlPosition(59, 9, 6, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.name: String", new GraphQlPosition(57, 9, 6, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.pass: String!", new GraphQlPosition(58, 9, 6, 0));
        exp.put("Query.viewerApiKey().ViewerApiKey.apiUserInfo[0].UsersItem.user: String!", new GraphQlPosition(59, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.name: String", new GraphQlPosition(57, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.pass: String!", new GraphQlPosition(58, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiAdminUsersSearch[0].UsersItem.user: String!", new GraphQlPosition(59, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.name: String", new GraphQlPosition(57, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.pass: String!", new GraphQlPosition(58, 9, 6, 0));
        exp.put("Query.viewerAnyAuth().ViewerAnyAuth.apiUserInfo[0].UsersItem.user: String!", new GraphQlPosition(59, 9, 6, 0));

        assertPositions(new GraphQlHandler(reg), exp);
    }

    public void testFileC() throws FileNotFoundException {

        String text = loadFile("test/testData/graphql/c.graphql");
        SchemaParser schemaParser = new SchemaParser();
        TypeDefinitionRegistry reg = schemaParser.parse(text);

        Map<String, GraphQlPosition> exp = new HashMap<>();
        exp.put("Query.users().nonExistentArg: nonExistentArg", new GraphQlPosition(10, 58, 14, 1));
        exp.put("cost", new GraphQlPosition(1, 1, 9, 0));
        exp.put("listSize", new GraphQlPosition(2, 1, 9, 0));
        exp.put("Query", new GraphQlPosition(9, 1, 4, 0));

        assertPositions(new GraphQlHandler(reg), exp);
    }

    public void testBasicFiles() throws IOException {
        for (int i = 1 ; i <= 6 ; i++) {
            String text = loadFile("test/testData/graphql/basic/files/f" + i + ".graphql");
            SchemaParser schemaParser = new SchemaParser();
            TypeDefinitionRegistry reg = schemaParser.parse(text);
            GraphQlHandler handler = new GraphQlHandler(reg);
            try {
                List<String> lines = readAllLines("test/testData/graphql/basic/locations/f" + i + ".txt");
                assertFalse(lines.isEmpty());
                for (String line : lines) {
                    String pointer = line.trim();
                    assertFalse(pointer.isBlank());
                    GraphQlPosition pos = handler.getPosition(pointer);
                    assertNotNull(pos);
                }
            } catch (IOException e) {
                fail("Caught an unexpected exception: " + e);
            }
        }
    }

    private static void assertPositions(GraphQlHandler handler, Map<String, GraphQlPosition> expected) {
        for (Map.Entry<String, GraphQlPosition> entry : expected.entrySet()) {
            String pointer = entry.getKey();
            GraphQlPosition pos = handler.getPosition(pointer);
            assertNotNull(pos);
            GraphQlPosition expPos = entry.getValue();
            assertEquals(pos.toString(), expPos.toString());
        }
    }
}
