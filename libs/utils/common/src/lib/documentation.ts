import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class Documentation {
  static setup = (title: string, path: string, app: INestApplication) => {
    const documentConfig = new DocumentBuilder()
      .setTitle(title)
      .setDescription("The Madify API description")
      .setVersion("1.0")
      .addBearerAuth(
        {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
          name: "JSON Web Token",
          description: "Enter JSON Web Token",
          in: "header",
        },
        "JSON Web Token Authorization"
      )
      .build();

    const document = SwaggerModule.createDocument(app, documentConfig);

    SwaggerModule.setup(path, app, document);
  };
}
