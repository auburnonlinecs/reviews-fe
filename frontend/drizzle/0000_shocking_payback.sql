CREATE TABLE IF NOT EXISTS "reviews_course_professors" (
	"course_id" integer NOT NULL,
	"professor_id" integer NOT NULL,
	CONSTRAINT "reviews_course_professors_course_id_professor_id_pk" PRIMARY KEY("course_id","professor_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews_courses" (
	"id" serial PRIMARY KEY NOT NULL,
	"course_id" varchar(16) NOT NULL,
	"name" varchar(256) NOT NULL,
	"difficulty" integer NOT NULL,
	"value" integer NOT NULL,
	"hours_per_week" integer NOT NULL,
	"average_grade" varchar(4) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews_professors" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews_ratings" (
	"id" serial PRIMARY KEY NOT NULL,
	"overall" integer NOT NULL,
	"knowledge" integer NOT NULL,
	"preparation" integer NOT NULL,
	"helpfulness" integer NOT NULL,
	"professor" integer NOT NULL,
	"comment" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews_course_professors" ADD CONSTRAINT "reviews_course_professors_course_id_reviews_courses_id_fk" FOREIGN KEY ("course_id") REFERENCES "public"."reviews_courses"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews_course_professors" ADD CONSTRAINT "reviews_course_professors_professor_id_reviews_professors_id_fk" FOREIGN KEY ("professor_id") REFERENCES "public"."reviews_professors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews_ratings" ADD CONSTRAINT "reviews_ratings_professor_reviews_professors_id_fk" FOREIGN KEY ("professor") REFERENCES "public"."reviews_professors"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
