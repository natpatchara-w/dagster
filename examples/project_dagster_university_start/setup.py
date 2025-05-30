from setuptools import find_packages, setup

setup(
    name="dagster_university",
    packages=find_packages(exclude=["dagster_university_tests"]),
    install_requires=[
        "dagster==1.10.*",
        "dagster-cloud",
        "dagster-duckdb",
        "geopandas",
        "pandas",
        "matplotlib",
        "shapely",
    ],
    extras_require={"dev": ["dagster-webserver", "pytest"]},
)
