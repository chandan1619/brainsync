/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createUserRouter from "./User.router";
import createCourseRouter from "./Course.router";
import createContentRouter from "./Content.router";
import createTestRouter from "./Test.router";
import createQuestionRouter from "./Question.router";
import createEnrollmentRouter from "./Enrollment.router";
import createTestAttemptRouter from "./TestAttempt.router";
import createAiConversationRouter from "./AiConversation.router";
import createDoubtRouter from "./Doubt.router";
import createDoubtReplyRouter from "./DoubtReply.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as CourseClientType } from "./Course.router";
import { ClientType as ContentClientType } from "./Content.router";
import { ClientType as TestClientType } from "./Test.router";
import { ClientType as QuestionClientType } from "./Question.router";
import { ClientType as EnrollmentClientType } from "./Enrollment.router";
import { ClientType as TestAttemptClientType } from "./TestAttempt.router";
import { ClientType as AiConversationClientType } from "./AiConversation.router";
import { ClientType as DoubtClientType } from "./Doubt.router";
import { ClientType as DoubtReplyClientType } from "./DoubtReply.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        course: createCourseRouter(router, procedure),
        content: createContentRouter(router, procedure),
        test: createTestRouter(router, procedure),
        question: createQuestionRouter(router, procedure),
        enrollment: createEnrollmentRouter(router, procedure),
        testAttempt: createTestAttemptRouter(router, procedure),
        aiConversation: createAiConversationRouter(router, procedure),
        doubt: createDoubtRouter(router, procedure),
        doubtReply: createDoubtReplyRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    course: CourseClientType<AppRouter>;
    content: ContentClientType<AppRouter>;
    test: TestClientType<AppRouter>;
    question: QuestionClientType<AppRouter>;
    enrollment: EnrollmentClientType<AppRouter>;
    testAttempt: TestAttemptClientType<AppRouter>;
    aiConversation: AiConversationClientType<AppRouter>;
    doubt: DoubtClientType<AppRouter>;
    doubtReply: DoubtReplyClientType<AppRouter>;
}
