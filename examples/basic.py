"""Minimal example for RecipeBox."""

from recipebox import recipebox


def main():
 runner = recipebox({"name": "RecipeBox", "dry_run": False})
 result = runner.execute()
 print(result)


if __name__ == "__main__":
 main()