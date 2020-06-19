# parcel-optimizer-disable-amd

> Disable AMD export of parcel generated modules

Background of this optimizer is the following issue: https://github.com/parcel-bundler/parcel/pull/2781.

Prevents to stop execution when parcel bundled modules are placed on sites which use an AMD loader.

## Usage

~~~
// .parcelrc
{
  "extends": "@parcel/config-default",
  "optimizers": {
    "*.js": ["@parcel/optimizer-terser", "@glomex/parcel-optimizer-disable-amd"]
  }
}
~~~

## License

[Apache 2.0 License](https://oss.ninja/apache-2.0-header/glomex)
