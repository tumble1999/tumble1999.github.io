{
  description = "A very basic flake";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
  };

  outputs = { self, nixpkgs }:
  let 
  system = "x86_64-linux";
  pkgs = import nixpkgs {
    inherit system;
  };
  lib = nixpkgs.lib;
  in
  {

    devShell.${system} = pkgs.mkShell {
      packages = with pkgs; [
        bundler
        nodePackages.pnpm
      ];
      shellHook = ''
        pnpm i 
        pnpm start
        
        bundle install
        
        
        bundle exec jekyll serve -w --config _config.yml,_config-dev.yml
      '';
    };

  };
}
